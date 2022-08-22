// add product handllers
const editor = new Quill('#editor', {
    theme: 'snow'
});
const form = document.getElementById('prod-form');
const formBtn = document.getElementById('form-btn');
const descInput = document.getElementById('desc-input');

formBtn.addEventListener('click', () => {
    descInput.value = editor.root.innerHTML;
    form.submit()
})
// remove product
const removeProd = (t) => {
    const form = t.parentElement;
    if (confirm('سيتم حذف المنتج نها')) {
        form.submit();
    }
}
// orders handellers
const orderForm = document.getElementById('form-remove-order');
const orderBtn = document.getElementById('remove-order-btn');

orderBtn.addEventListener('click', () => {
    if (confirm('سيتم حذف هذا الطلب ناهائيا هل انت متأكد')) {
        orderForm.submit()
    }
})
