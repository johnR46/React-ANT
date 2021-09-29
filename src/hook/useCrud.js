import { useState } from "react";

import { useHistory } from "react-router";

const useCrud = () => {
  const [loading, setLoading] = useState(false);
  const [datas, setDatas] = useState([]);
  const [formValue, setFormValue] = useState({});
  const history = useHistory();

  return {
    datas,
    setDatas,
    loading,
    setLoading,
    formValue,
    setFormValue,
    history,
  };
};
export default useCrud;
