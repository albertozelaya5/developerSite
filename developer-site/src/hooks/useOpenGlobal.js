import { create } from "zustand";

export const useOpenGlobal = create((set) => ({
  isDialogOpen: false,
  isDrawerOpen: false,
  openDialog: () => set({ isDialogOpen: true, isDrawerOpen: false }),
  closeDialog: () => set({ isDialogOpen: false }),
  openDrawer: () => set({ isDrawerOpen: true, isDialogOpen: false }),
  closeDrawer: () => set({ isDrawerOpen: false }),
}));

// export const useVisibleGlobal = create((set) => ({
//   visible: false,
//   setVisible: (value) => set({ visible: value }),
// }));

export const useDrawerGlobal = create((set) => ({
  openDrawer: false,
  setOpenDrawer: (value) => set({ openDrawer: value }),
}));

// export const useDialogGlobal = create ((set) =>({
//   visibleDialog: false,
//   setVisibleDialog: (value) => set({visibleDialog: value}),
// }))


export const useDialogGlobal = create((set) => ({
  openDialog: false,
  setOpenDialog: (value) => set({ openDialog: value }),
}));