import { Toaster as SonnerToaster } from "sonner";

export function Toaster({ ...props }) {
    return <SonnerToaster theme="light" position="top-right" {...props} />;
}
