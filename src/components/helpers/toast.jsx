import { toast } from "sonner";

export const ShowToast = ({ type, title, description }) => {
  if (type === "success") {
    toast.success(title, { description });
  } else if (type === "error") {
    toast.error(title, { description });
  }
};
