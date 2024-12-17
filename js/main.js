document.getElementById('menu_show').addEventListener('click', function() {
    const sub_menu = document.getElementById('sub_menu');
    const menu = document.getElementById('menu');

    sub_menu.classList.add('active');  // Hiển thị sub_menu
    sub_menu.classList.remove('de_active');

    menu.classList.add('de_active');   // Ẩn menu
    menu.classList.remove('active');
});

// Khi bấm vào menu_close, ẩn sub_menu và hiển thị lại menu
document.getElementById('menu_close').addEventListener('click', function() {
    const sub_menu = document.getElementById('sub_menu');
    const menu = document.getElementById('menu');

    sub_menu.classList.add('de_active');  // Ẩn sub_menu
    sub_menu.classList.remove('active');

    menu.classList.add('active');        // Hiển thị menu
    menu.classList.remove('de_active');
});
