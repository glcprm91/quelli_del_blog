
      import { annotate } from 'https://unpkg.com/rough-notation?module';

      const n1 = document.querySelector('em');
      let n2 = document.querySelectorAll('strong'), i;
      const n3 = document.querySelector('h2');
      const n4 = document.querySelector('#sotto');
      const n5 = document.querySelector('#block');

      const a1 = annotate(n1, { type: "underline", color: "#2196F3" });
      // const a2 = annotate(n2, { type: 'circle', color: 'red', padding: 10 });
      const a3 = annotate(n3, { type: 'box', color: 'orange' });
      const a4 = annotate(n4, { type: 'highlight', color: 'yellow', iterations: 1, multiline: true });
      const a5 = annotate(n5, { type: 'bracket', color: 'red', padding: [2, 10], brackets: ['left', 'right'], strokeWidth: 3 })

for (i = 0; i < n2.length; ++i) {
  let a1 = annotate(n2[i], { type: "circle", color: "red", padding: 3 });
  a1.show();
}

      a1.show();
      // a2.show();
      a3.show();
      a4.show();
      a5.show();

