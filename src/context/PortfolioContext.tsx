import React, { createContext, useContext, useState, useEffect } from 'react';
import { PersonalInfo, ProjectItem } from '../types/portfolio';
import { initialPersonalInfo, projectsData as defaultProjects } from '../data/portfolioData';

interface PortfolioContextType {
  info: PersonalInfo;
  updateInfo: (updates: Partial<PersonalInfo>) => void;
  resetInfo: () => void;
  projects: ProjectItem[];
  updateProject: (id: string, updates: Partial<ProjectItem>) => void;
  isCustomizerOpen: boolean;
  setIsCustomizerOpen: (open: boolean) => void;
  activeProjectModal: ProjectItem | null;
  setActiveProjectModal: (project: ProjectItem | null) => void;
  showToast: (message: string) => void;
  toastMessage: string | null;
}

const STORAGE_KEY = 'mohit_portfolio_info_v1';

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [info, setInfo] = useState<PersonalInfo>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...initialPersonalInfo, ...JSON.parse(saved) };
      }
    } catch {
      // fallback to initial
    }
    return initialPersonalInfo;
  });

  const [projects, setProjects] = useState<ProjectItem[]>(defaultProjects);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [activeProjectModal, setActiveProjectModal] = useState<ProjectItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(info));
    } catch {
      // ignore
    }
  }, [info]);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((prev) => (prev === message ? null : prev));
    }, 3200);
  };

  const updateInfo = (updates: Partial<PersonalInfo>) => {
    setInfo((prev) => ({ ...prev, ...updates }));
    showToast('Portfolio details updated successfully!');
  };

  const resetInfo = () => {
    setInfo(initialPersonalInfo);
    localStorage.removeItem(STORAGE_KEY);
    showToast('Reset to default editable placeholders');
  };

  const updateProject = (id: string, updates: Partial<ProjectItem>) => {
    setProjects((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updates } : item))
    );
    showToast('Project updated successfully!');
  };

  return (
    <PortfolioContext.Provider
      value={{
        info,
        updateInfo,
        resetInfo,
        projects,
        updateProject,
        isCustomizerOpen,
        setIsCustomizerOpen,
        activeProjectModal,
        setActiveProjectModal,
        showToast,
        toastMessage,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
