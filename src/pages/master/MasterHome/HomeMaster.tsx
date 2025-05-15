import { useEffect } from 'react';
import WebApp from '@twa-dev/sdk';

export default function HomeMaster() {
  useEffect(() => {
    WebApp.expand(); // Разворачиваем веб-приложение на весь экран
    WebApp.MainButton.setText('Добавить услугу'); // Устанавливаем текст кнопки
    WebApp.MainButton.show(); // Показываем кнопку
    WebApp.MainButton.onClick(() => {
      alert('Переход к добавлению услуги (реализуй позже)');
    });

    return () => WebApp.MainButton.hide(); // Скрываем кнопку при размонтировании компонента
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">Привет, мастер 👋</h1>
      <p className="text-sm text-gray-600">
        Здесь будет краткая статистика, ближайшие записи, кнопка "Добавить
        услугу", уведомления и т.п.
      </p>
    </div>
  );
}
