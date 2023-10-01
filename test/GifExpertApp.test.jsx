import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en <GifExpertApp/>', () => {
  test('Agregar una nueva categoria al estado   ', () => {
    // Render el componente GifExpertApp
    const { getByText } = render(<GifExpertApp />);

    // Obtener el componente AddCategory
    const addCategoryButton = getByText('Add Category');

    // Simular un clic en el botón AddCategory
    fireEvent.click(addCategoryButton);

    // Esperar que la función AddCategory se haya llamado con la nueva categoría
    expect(onAddCategory).toHaveBeenCalledWith('New Category');

    // Esperar que la nueva categoría se haya agregado al estado
    expect(getByText('New Category')).toBeInTheDocument();
  });
});
