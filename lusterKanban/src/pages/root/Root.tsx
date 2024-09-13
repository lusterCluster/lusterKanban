import { useLayoutEffect, useState } from "react";
import DesktopLayout from "../../layout/desktop/MainLayout";
import MobileLayout from "../../layout/mobile/MainLayout";
import { PALLETE, Pallete, PalleteNames } from "../../store/style";



const Root = () => {
  const [pallete, setPallete] = useState(Pallete.Nebula)
  const changePallete = (palleteName: PalleteNames) => setPallete(Pallete[palleteName])
  useLayoutEffect(() => {
    // Seleccionar el elemento :root y aplicar el background-color
    document.documentElement.style.backgroundColor = pallete.primary[700];

    // Limpiar el efecto al desmontar el componente si es necesario
    return () => {
      document.documentElement.style.backgroundColor = "";
    };
  }, [pallete]);
  return (
    <>
      <DesktopLayout>
        <div>Desktop Layout</div>        
      </DesktopLayout>
      <MobileLayout>
        <div>Mobile Layout</div>
      </MobileLayout>
    </>
  );
};

export default Root;
