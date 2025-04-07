import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { LoginForm } from ".";
import { Banhcafe } from "../svgs";
import { useAuth } from "@/hooks/useAuth";
import { useDialogGlobal } from "@/hooks";

export const DialogButton = () => {
  const { user, logout, form, showPassword, onSubmit, setShowPassword } = useAuth();
  const [errorMessage, setErrorMessage] = useState({ user: "", password: "" });

  const { openDialog, setOpenDialog } = useDialogGlobal();
  // console.log("🚀 ~ DialogButton ~ openDialog:", openDialog);

  const handleSubmit = async (formData) => {
    const result = await onSubmit(formData);
    if (result && result.success) {
      setErrorMessage({ user: "", password: "" });
      // setOpenDialog(false); //automaticamente ya se pone false
    } else if (result && result.errors) {
      setErrorMessage(result.errors);
    }
  };

  const handleLogout = () => {
    logout();
    setOpenDialog(false);
    // console.log(openDialog);
  };

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild>
        {user ? (
          <Button
            className="hover:bg-[#A32035] bg-RED_DARK border border-RED_LIGHT hover:bg-transparent hover:text-RED_LIGHT transition ease-out duration-200 text text-white py-2 px-4 rounded right-0"
            onClick={handleLogout}
          >
            Cerrar sesión
          </Button>
        ) : (
          <Button
            className="hover:bg-[#A32035] bg-RED_DARK border border-RED_LIGHT hover:bg-transparent hover:text-RED_LIGHT transition ease-out duration-200 text text-white py-2 px-4 rounded right-0"
            onClick={() => setOpenDialog(true)}
          >
            Iniciar sesión
          </Button>
        )}
      </DialogTrigger>
      {!user && (
        <DialogContent
          onPointerDownOutside={(e) => {
            e.preventDefault();
          }}
        >
          <DialogHeader>
            <DialogTitle>
              <Banhcafe width="200px" height="50px" />
            </DialogTitle>
          </DialogHeader>
          <LoginForm
            open={setOpenDialog}
            form={form}
            showPassword={showPassword}
            onSubmit={handleSubmit}
            setShowPassword={setShowPassword}
            errorMessage={errorMessage}
          />
        </DialogContent>
      )}
    </Dialog>
  );
};
