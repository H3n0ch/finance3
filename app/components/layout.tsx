import { LanguageProvider } from '../i18n/LanguageContext';
import LayoutContent from './LayoutContent';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <LayoutContent>{children}</LayoutContent>
    </LanguageProvider>
  );
}
