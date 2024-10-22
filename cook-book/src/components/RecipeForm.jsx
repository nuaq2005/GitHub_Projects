import React from 'react';

function RecipeForm({category, area, setCategory, setArea, categories, areas }) {
    const handleCategoryChange = (e) => {
        setCategory(e.target.value);  // Set selected category
        setArea('');  // Reset the area when a category is selected
      };
    
      const handleAreaChange = (e) => {
        setArea(e.target.value);  // Set selected area
        setCategory('');  // Reset the category when an area is selected
      };

    return (
        <div className='filters'>
          <h3>Filter By:</h3>
    
          {/* Category Filter */}
        <div className='filter-group'>
        <label htmlFor='category'>Category: </label>
        <select id='category' value={category} onChange={handleCategoryChange}>
          <option value=''>Any</option>
          {categories.map((cat) => (
            <option key={cat.idCategory} value={cat.strCategory}>
              {cat.strCategory}
            </option>
          ))}
        </select>
      </div>
    
          {/* Area Filter */}
          <div className='filter-group'>
        <label htmlFor='area'>Area: </label>
        <select id='area' value={area} onChange={handleAreaChange}>
          <option value=''>Any</option>
          {areas.map((area) => (
            <option key={area.strArea} value={area.strArea}>
              {area.strArea}
            </option>
          ))}
        </select>
      </div>
        </div>
      );
    }

export default RecipeForm;