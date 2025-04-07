import { useState } from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { MdLogin } from "react-icons/md";
import { LoginForm } from ".";
import { useAuth } from "@/hooks/useAuth";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useDrawerGlobal, useOpenGlobal } from "@/hooks";

export const DrawerButton = () => {
  const { closeDrawer, setOpen } = useOpenGlobal();
  const { user, logout, form, showPassword, onSubmit, setShowPassword } = useAuth();
  const [errorMessage, setErrorMessage] = useState({ user: "", password: "" });
  const { visibleDrawer, setVisibleDrawer } = useDrawerGlobal();

  const {openDrawer, setOpenDrawer} = useDrawerGlobal()

  const handleLogin = async (formData) => {
    const result = await onSubmit(formData);
    if (result && result.success) {
      setErrorMessage({ user: "", password: "" });
      setOpenDrawer(false)
    } else if (result && result.errors) {
      setErrorMessage(result.errors);
    }
  };

  const handleLogout = () => {
    logout();
    // setOpen(false)
  };

  return (
    <Drawer open={openDrawer} onOpenChange={setVisibleDrawer}>
      <DrawerTrigger asChild>
        {user ? (
          <RiLogoutBoxLine
            size={25}
            className="md:hidden text-gray-700 cursor-pointer duration-300 hover:text-[#A32035]"
            title="Cerrar sesión"
            onClick={handleLogout}
          />
        ) : (
          <MdLogin
            size={25}
            className="md:hidden text-gray-700 cursor-pointer duration-300 hover:text-[#A32035]"
            title="Iniciar sesión"
            onClick={()=>{setOpenDrawer(true)}}
          />
        )}
      </DrawerTrigger>
      <DrawerContent>
        <LoginForm
          setOpen={setOpenDrawer}
          form={form}
          showPassword={showPassword}
          onSubmit={handleLogin}
          setShowPassword={setShowPassword}
          errorMessage={errorMessage}
        />
      </DrawerContent>
    </Drawer>
  );
};
