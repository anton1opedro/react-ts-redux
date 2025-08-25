import { AppDispatch, RootState } from "./store.ts";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

type DispatchFunction = () => AppDispatch;

const useCartDispatch: DispatchFunction = useDispatch;
const useCartSelector: TypedUseSelectorHook<RootState> = useSelector;

export { useCartDispatch, useCartSelector };
