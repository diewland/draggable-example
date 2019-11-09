/* ---------- RENDER HTML ---------- */
let colors = [
  'success',
  'info',
  'primary',
  'warning',
  'danger',
];
function render_items() {
  let html = '';
  colors.forEach((c) => html += `
    <div class='draggable-source col-3 rounded bg-${c}'>
    </div>
  `);
  $('.item.row').html(html);
}
function render_slots() {
  let html = '';
  for(let i=0; i<12; i++) {
    html += `
      <div class='draggable-source col-3 border rounded'></div>`;
  }
  $('.slot.row').html(html);
}

render_items();
render_slots();

/* ---------- BIND DOM ---------- */

$('a.reset').click(() => render_slots());

/* ---------- DRAGGABLE ---------- */

const containers = document.querySelectorAll('.play-container');
const swappable = new Draggable.Swappable(containers, {
  mirror: { constrainDimensions: true },
});

// fill slot trick
// use setTimeout to prevent removeChild of null error
swappable.on('swappable:stop', () => {
  setTimeout(render_items, 1);
});
