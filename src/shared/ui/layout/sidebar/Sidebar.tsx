import { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export const Sidebar: FC<IProps> = ({ children }) => {
  return (
    <div>
      <p>Главная страница</p>
      <p>Сделать заказ</p>
      <p>История заказов</p>
      {children}
    </div>
  );
};
