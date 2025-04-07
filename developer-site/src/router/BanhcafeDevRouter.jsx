import { Routes, Route } from "react-router-dom";

import { LandingPage, TitleHandler } from "@/pages";
import { ProgramContent } from "@/pages/ProgramContent";
import { PermissionPrivate, PrivatePage } from "@/components/landing";
import NotFound from "@/pages/NotFound";
import { useAuth } from "@/hooks/useAuth";

export const BanhcafeDevRouter = () => {
  const { user } = useAuth();

  return (
    <div>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<LandingPage user={user? user:null} />} />
        <Route path="/:title" element={<TitleHandler />} />
      <Route path="/:title/:id" element={<ProgramContent />} />
        <Route path="/dashboard" element={<PrivatePage />} />
        {/* <Route
          path="/reader"
          element={
            <ProtectedRoute isAllowed={!!loged}>
              <Reader />
            </ProtectedRoute>
          }
        /> */}
        <Route path="/private" element={<PermissionPrivate />} />
        {/* <Route
          path="/admin"
          element={
            <ProtectedRoute isAllowed={!!loged}>
              <Admin />
            </ProtectedRoute>
          }
        /> */}
      </Routes>
    </div>
  );
};


