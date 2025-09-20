export const getNameInitials = (name) => {
  if (!name) return "";
  return name.trim().substring(0, 2).toUpperCase();
};
