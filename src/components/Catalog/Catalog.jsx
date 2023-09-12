import CardSection from '../CardSection/CardSection';
import CatalogCardSection from '../CatalogCardSection/CatalogCardSection';
import { temporaryFiltersArray } from '../../utils/functions/temporaryObjectArrays';

function Catalog({ onCardClick }) {
  return (
    <>
      <CardSection
        filters={temporaryFiltersArray}
        quantity={134}
        isUsedOnMainPage={false}
      >
        <CatalogCardSection
          isUsedOnMainPage={false}
          requiredLength={12}
          onCardClick={onCardClick}
        />
      </CardSection>
    </>
  );
}

export default Catalog;
