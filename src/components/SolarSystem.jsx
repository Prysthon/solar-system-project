import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {
          planets
            .map((block) => (<PlanetCard
              key={ block.name }
              planetName={ block.name }
              planetImage={ block.image }
            />))
        }
      </div>
    );
  }
}

export default SolarSystem;
