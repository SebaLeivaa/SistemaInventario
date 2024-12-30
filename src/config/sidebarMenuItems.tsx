import React from "react";
import {
  LogIn,
  Users,
  UserPlus,
  ShoppingCart,
  Store,
  DollarSign,
  Bell,
  Tags,
  CreditCard,
  Truck,
  BarChart2,
  Package,
} from "lucide-react";

export interface SidebarItemProps {
  title: string;
  icon: React.ReactElement;
  subItems?: { title: string; path: string }[];
}

export const sidebarMenuItems: SidebarItemProps[] = [
  {
    title: "Gestionar Vendedores",
    icon: <Users />,
    subItems: [
      { title: "Crear Vendedor", path: "/sellers/create" },
      { title: "Modificar Vendedor", path: "/sellers/modify" },
      { title: "Buscar Vendedor", path: "/sellers/search" },
      { title: "Visualizar Vendedor", path: "/sellers" },
    ],
  },
  {
    title: "Gestionar Clientes",
    icon: <UserPlus />,
    subItems: [
      { title: "Crear Cliente", path: "/clients/create" },
      { title: "Modificar Cliente", path: "/clients/modify" },
      { title: "Buscar Cliente", path: "/clients/search" },
      { title: "Visualizar Cliente", path: "/clients" },
    ],
  },
  {
    title: "Gestionar Productos",
    icon: <ShoppingCart />,
    subItems: [
      { title: "Crear Producto", path: "/products/create" },
      { title: "Modificar Producto", path: "/products/modify" },
      { title: "Buscar Producto", path: "/products/search" },
      { title: "Visualizar Producto", path: "/products" },
    ],
  },
  {
    title: "Compra a Proveedores",
    icon: <Store />,
    subItems: [
      { title: "Crear Compra", path: "/purchases/create" },
      { title: "Modificar COmpra", path: "/purchases/modify" },
      { title: "Buscar Compra", path: "/purchases/search" },
      { title: "Visualizar Compra", path: "/purchases" },
    ],
  },
  {
    title: "Gestionar Ventas",
    icon: <DollarSign />,
    subItems: [
      { title: "Crear Venta", path: "/sales/create" },
      { title: "Buscar Venta", path: "/sales/search" },
      { title: "Visualizar Venta", path: "/sales" },
    ],
  },
  {
    title: "Alertas",
    icon: <Bell />,
    subItems: [
      { title: "Reposición de Productos", path: "/alerts/stock" },
      { title: "Expiración de Productos", path: "/alerts/expiration" },
      { title: "Visualizar Alertas", path: "/alerts" },
    ],
  },
  {
    title: "Categorías",
    icon: <Tags />,
    subItems: [
      { title: "Crear Categoría", path: "/categories/create" },
      { title: "Modificar Categoría", path: "/categories/modify" },
      { title: "Buscar Categoría", path: "/categories/search" },
      { title: "Visualizar Categoría", path: "/categories" },
    ],
  },
  {
    title: "Métodos de Pago",
    icon: <CreditCard />,
    subItems: [
      { title: "Crear Método de Pago", path: "/payment-methods/create" },
      { title: "Modificar Método de Pago", path: "/payment-methods/modify" },
      { title: "Visualizar Método de Pago", path: "/payment-methods" },
    ],
  },
  {
    title: "Gestionar Proveedores",
    icon: <Truck />,
    subItems: [
      { title: "Crear Proveedor", path: "/suppliers/create" },
      { title: "Modififcar Proveedor", path: "/suppliers/modify" },
      { title: "Buscar Proveedor", path: "/suppliers/search" },
      { title: "Visualizar Proveedor", path: "/suppliers" },
    ],
  },
  {
    title: "Reportes",
    icon: <BarChart2 />,
    subItems: [
      { title: "Productos más y menos vendidos", path: "/reports/product-sales" },
      {
        title: "Compra de lotes",
        path: "/reports/batch-purchases",
      },
    ],
  },
  {
    title: "Gestionar Lotes",
    icon: <Package />,
    subItems: [
      { title: "Registrar lote", path: "/batches/register" },
    ],
  },
];
