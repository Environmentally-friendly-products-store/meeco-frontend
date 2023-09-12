import CardSection from '../CardSection/CardSection';
import CatalogCardSection from '../CatalogCardSection/CatalogCardSection';
import { temporaryFiltersArray } from '../../utils/functions/temporaryObjectArrays';
import Breadcrumbs from '../BreadCrumbs/BreadCrumbs';

function Catalog({ onCardClick }) {
  return (
    <>
      <Breadcrumbs />
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
