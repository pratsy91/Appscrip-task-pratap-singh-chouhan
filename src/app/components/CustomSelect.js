'use client'
import { useState, useRef, useEffect } from 'react';

export default function CustomSelect({ value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const options = [
    { value: 'recommended', label: 'Recommended' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'popular', label: 'Popular' },
    { value: 'newest', label: 'Newest First' }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="custom-select" ref={selectRef}>
      <button 
        className="select-button" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {options.find(opt => opt.value === value)?.label}
        <span className="select-arrow">
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M1 1.5L6 6.5L11 1.5" stroke="#252020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
      
      {isOpen && (
        <div className="select-options">
          {options.map((option) => (
            <div
              key={option.value}
              className={`select-option ${value === option.value ? 'selected' : ''}`}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 