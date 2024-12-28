import React from 'react';
import {
  LogIn, Users, UserPlus, ShoppingCart, Store,
  DollarSign, Bell, Tags, CreditCard, Truck,
  BarChart2, Package
} from 'lucide-react';

export const menuItems = [
  {
    title: 'Manage Sellers',
    icon: <Users />,
    subItems: [
      { title: 'Create Seller', path: '/sellers/create' },
      { title: 'Modify Seller', path: '/sellers/modify' },
      { title: 'Search Seller', path: '/sellers/search' },
      { title: 'View Sellers', path: '/sellers' }
    ]
  },
  {
    title: 'Manage Clients',
    icon: <UserPlus />,
    subItems: [
      { title: 'Create Client', path: '/clients/create' },
      { title: 'Modify Client', path: '/clients/modify' },
      { title: 'Search Client', path: '/clients/search' },
      { title: 'View Clients', path: '/clients' }
    ]
  },
  {
    title: 'Manage Products',
    icon: <ShoppingCart />,
    subItems: [
      { title: 'Create Product', path: '/products/create' },
      { title: 'Modify Product', path: '/products/modify' },
      { title: 'Search Product', path: '/products/search' },
      { title: 'View Products', path: '/products' }
    ]
  },
  {
    title: 'Supplier Purchases',
    icon: <Store />,
    subItems: [
      { title: 'Create Purchase', path: '/purchases/create' },
      { title: 'Modify Purchase', path: '/purchases/modify' },
      { title: 'Search Purchase', path: '/purchases/search' },
      { title: 'View Purchases', path: '/purchases' }
    ]
  },
  {
    title: 'Sales Management',
    icon: <DollarSign />,
    subItems: [
      { title: 'Create Sale', path: '/sales/create' },
      { title: 'Search Sales', path: '/sales/search' },
      { title: 'View Sales', path: '/sales' }
    ]
  },
  {
    title: 'Alerts',
    icon: <Bell />,
    subItems: [
      { title: 'Stock Replenishment Alerts', path: '/alerts/stock' },
      { title: 'Expiration Alerts', path: '/alerts/expiration' },
      { title: 'View Alerts', path: '/alerts' }
    ]
  },
  {
    title: 'Product Categories',
    icon: <Tags />,
    subItems: [
      { title: 'Create Category', path: '/categories/create' },
      { title: 'Modify Category', path: '/categories/modify' },
      { title: 'Search Categories', path: '/categories/search' },
      { title: 'View Categories', path: '/categories' }
    ]
  },
  {
    title: 'Payment Methods',
    icon: <CreditCard />,
    subItems: [
      { title: 'Create Payment Method', path: '/payment-methods/create' },
      { title: 'Modify Payment Method', path: '/payment-methods/modify' },
      { title: 'View Payment Methods', path: '/payment-methods' }
    ]
  },
  {
    title: 'Manage Suppliers',
    icon: <Truck />,
    subItems: [
      { title: 'Create Supplier', path: '/suppliers/create' },
      { title: 'Modify Supplier', path: '/suppliers/modify' },
      { title: 'Search Suppliers', path: '/suppliers/search' },
      { title: 'View Suppliers', path: '/suppliers' }
    ]
  },
  {
    title: 'Reports',
    icon: <BarChart2 />,
    subItems: [
      { title: 'Most and Least Sold Products', path: '/reports/product-sales' },
      { title: 'Product Batch Purchase Reports', path: '/reports/batch-purchases' }
    ]
  },
  {
    title: 'Batch Management',
    icon: <Package />,
    subItems: [
      { title: 'Register Product Batches', path: '/batches/register' }
    ]
  }
];