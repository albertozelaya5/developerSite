import { MdOutlineSecurity } from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const LoginForm = ({ onSubmit, form, showPassword, setShowPassword }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    form.handleSubmit(onSubmit)();
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-center gap-x-2">
          <MdOutlineSecurity size={30} /> <CardTitle>Inicio de sesión</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={handleSubmit} className="space-y-8">
            <FormField
              control={form.control}
              name="userName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Usuario</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Eje: banhcafeUser" autoComplete="off" />
                  </FormControl>
                  <FormDescription>Usuario entregado por BANHCAFE</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contraseña</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        placeholder="Eje: *****"
                        // onClick={() => setShowPassword(!showPassword)}
                        type={showPassword? "text": "password"}
                        {...field}
                        autoComplete="off"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 inset-y-1"
                        style={{ top: "50%", transform: "translateY(-50%)" }}
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                  </FormControl>
                  <FormDescription>Contraseña entregada por BANHCAFE</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="hover:bg-[#A32035] bg-RED_DARK border border-RED_LIGHT hover:bg-transparent hover:text-RED_LIGHT transition ease-out duration-200 text text-white rounded w-full"
            >
              Entrar
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
