import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Legal from './Legal';
import { describe, it, expect } from 'vitest';

describe('Legal Component', () => {
  it('should display the Terms of Service tab by default on /terms route', () => {
    render(
      <MemoryRouter initialEntries={['/terms']}>
        <Routes>
          <Route path="/terms" element={<Legal />} />
        </Routes>
      </MemoryRouter>
    );

    const tabs = screen.getAllByRole('tab');
    const termsTab = tabs.find(tab => tab.textContent === 'Terms of Service');
    expect(termsTab).toHaveAttribute('data-state', 'active');
  });

  it('should display the Privacy Policy tab by default on /privacy route', () => {
    render(
      <MemoryRouter initialEntries={['/privacy']}>
        <Routes>
          <Route path="/privacy" element={<Legal />} />
        </Routes>
      </MemoryRouter>
    );

    const tabs = screen.getAllByRole('tab');
    const privacyTab = tabs.find(tab => tab.textContent === 'Privacy Policy');
    expect(privacyTab).toHaveAttribute('data-state', 'active');
  });
});