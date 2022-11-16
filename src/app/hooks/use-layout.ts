import {useAppDispatch, useAppSelector} from "@app/store/hooks";
import {disableLayout, enableLayout, selectLayout} from "@app/store/features/layout-slice/index";
import {useEffect} from "react";

type ReturnUseLayoutType = [boolean, () => void, () => void]

function useLayout(disabled: boolean = false): ReturnUseLayoutType {
  const {status} = useAppSelector(selectLayout);
  const dispatch = useAppDispatch();
  const enable = () => dispatch(enableLayout());
  const disable = () => dispatch(disableLayout());

  useEffect(() => {
    if (disabled) disable();
  }, [])

  return [status, enable, disable];
}

export default useLayout