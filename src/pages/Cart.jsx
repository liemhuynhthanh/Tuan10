// src/pages/CartAndHome.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, updateQuantity } from '../stores/cartSlice';

const CartAndHome = () => {
  const [newProduct, setNewProduct] = useState('');
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Thêm sản phẩm vào giỏ hàng
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  // Xoá sản phẩm khỏi giỏ hàng
  const handleRemoveItem = (id) => {
    dispatch(removeItem({ id }));
  };

  // Cập nhật số lượng sản phẩm trong giỏ hàng
  const handleUpdateQuantity = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const products = [
    { id: 1, name: 'Sản phẩm A', price: 100000 },
    { id: 2, name: 'Sản phẩm B', price: 150000 },
    { id: 3, name: 'Sản phẩm C', price: 200000 },
  ];

  return (
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0">
      {/* Phần hiển thị sản phẩm */}
      <div className="w-full md:w-2/3 p-4 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Danh Sách Sản Phẩm</h1>
        <ul>
          {products.map((product) => (
            <li key={product.id} className="flex justify-between items-center p-2 border-b">
              <span>{product.name} - {product.price} VND</span>
              <button
                onClick={() => handleAddItem(product)}
                className="bg-blue-500 text-white p-1 rounded"
              >
                Thêm vào giỏ
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Phần hiển thị giỏ hàng */}
      <div className="w-full md:w-1/3 p-4 bg-white border-l">
        <h1 className="text-2xl font-bold mb-4">Giỏ Hàng</h1>
        {cartItems.length === 0 ? (
          <p>Giỏ hàng của bạn hiện tại trống.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center p-2 border-b">
                <span>{item.name} - {item.price} VND</span>
                <div className="flex items-center">
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="bg-red-500 text-white p-1 rounded mr-2"
                  >
                    Xoá
                  </button>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      handleUpdateQuantity(item.id, parseInt(e.target.value) || 0)
                    }
                    min="1"
                    className="w-16 p-1 text-center"
                  />
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4">
          <h3>
            Tổng cộng: {cartItems.reduce((total, item) => total + item.quantity * item.price, 0)} VND
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CartAndHome;
