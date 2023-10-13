type BaseCardProps = {
  padding?: 'large' | 'xmedium' | 'small';
  borderColor?: 'purple' | 'white' | 'purple-dark-secondary';
  backgroundColor?: 'purple' | 'white' | 'purple-dark-secondary';
  children: React.ReactNode;
  onClick?: () => void;
};
