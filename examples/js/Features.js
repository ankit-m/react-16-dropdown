import React from 'react';

export default function Features() {
  return (
    <section className='bg-light py-4'>
      <div className='container'>
        <h2>Features</h2>

        <ul>
          <li><strong>Light weight</strong>: Zero external dependencies which makes the library super light.</li>
          <li><strong>Keyboard support</strong>: Built in support for keyboard navigation for accesibility.</li>
          <li><strong>Portals</strong>: Uses portal based implementation for menus.</li>
          <li><strong>Fully customizable</strong>: Add your own renderers and components for trigger, menu and option.</li>
          <li><strong>Option groups</strong>: Add sections to to dropdown options.</li>
          <li><strong>Multi-level menus</strong>: <span className='badge badge-dark'>Coming soon</span></li>
        </ul>
      </div>
    </section>
  );
}
