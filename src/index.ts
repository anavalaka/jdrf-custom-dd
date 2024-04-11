
import { EMPTY, Observable, catchError } from 'rxjs';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { interval } from 'rxjs/internal/observable/interval';
import { merge } from 'rxjs/internal/observable/merge';
import { timer } from 'rxjs/internal/observable/timer';
import { filter } from 'rxjs/internal/operators/filter';
import { map } from 'rxjs/internal/operators/map';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { take } from 'rxjs/internal/operators/take';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';
import { tap } from 'rxjs/internal/operators/tap';

const wany = window as any;

const __custom_dd_groups_english = `Abbott - Diabetes Care,Abbott - Nutrition,AGF Management Limited/Société de gestion AGF Limitée - AGF Management,AGF Management Limited/Société de gestion AGF Limitée - AGF Investments,Aon - Aon Hewitt,Aon - Aon Minet,Aon - Aon Risk Solutions,Aon - Aon Reinsurance Solutions,Banque Nationale/National Bank of Canada - Technologie de l'information/Information Technology,Banque Nationale/National Bank of Canada - Entreprise et assurances/Commercial Banking and Insurance,Banque Nationale/National Bank of Canada - Expérience employé/Employee Experience,Banque Nationale/National Bank of Canada - Finance et trésorerie/Finance,Banque Nationale/National Bank of Canada - Gestion de patrimoine/Wealth Management,Banque Nationale/National Bank of Canada - Gestion des risques/Risk Management,Banque Nationale/National Bank of Canada - Marchés financiers/Financial Markets,Banque Nationale/National Bank of Canada - Opérations/Operations,Banque Nationale/National Bank of Canada - Particuliers et expérience client/Personal Banking and Client Experience,CIBC - Intria,CIBC - Technology & Operations,Desjardins - Marché des capitaux/Capital Markets,Desjardins - Contentieux/Legal,IA Financial Group/IA Groupe Financier - Insurance,McMillan LLP - McMillan S.E.N.C.R.L.,RBC/Banque Royale - Advice Center/Centre de conseils,RBC/Banque Royale - Business Financial Services / Services financiers aux entreprises,RBC/Banque Royale - Canadian Banking / Services bancaires régionaux,RBC/Banque Royale - Capital Markets /Marchés des capitaux,RBC/Banque Royale - Career Sales Force/Équipes de vente de carrière,RBC/Banque Royale - Direct Investing / RBC Placements en Direct ,RBC/Banque Royale - Financial planning / Planification financière,RBC/Banque Royale - Functions / Fonctions,RBC/Banque Royale - Global Asset Management /Gestion mondiale d’actifs ,RBC/Banque Royale - Group Advantage/Avantages collectifs,RBC/Banque Royale - Insurance / Assurances,RBC/Banque Royale - Integrated Markets / Marchés intégrés ,RBC/Banque Royale - Investor & Treasury Services / Services aux investisseurs et de trésorerie,RBC/Banque Royale - Other / Autre,RBC/Banque Royale - Personal & Commercial Banking / Services bancaires régionaux,RBC/Banque Royale - Private Banking /Gestion privée,RBC/Banque Royale - RBC Dominion Securities / RBC Dominion valeurs mobilière,RBC/Banque Royale - Technology & Operations / Technologie et exploitation ,RBC/Banque Royale - Wealth Management / Gestion de patrimoine,TD Bank/Banque TD - Audit / Audit,TD Bank/Banque TD - Banking / Bancaire,TD Bank/Banque TD - Branch Banking / Succursale bancaire,TD Bank/Banque TD - Business Banking / Services bancaires aux entreprises,TD Bank/Banque TD - Chiefs / Chiefs,TD Bank/Banque TD - Compliance / Conformité,TD Bank/Banque TD - Customer Assistance / Assistance client d'affaires,TD Bank/Banque TD - Customer Platforms / Plateformes clients,TD Bank/Banque TD - Digital Channels / Canaux numériques,TD Bank/Banque TD - Enterprise Protect / Protéger l'entreprise,TD Bank/Banque TD - Finance / Finances,TD Bank/Banque TD - Fraud Operations / Opérations de fraude,TD Bank/Banque TD - GAML / LMCBA,TD Bank/Banque TD - Human Resources / Ressources humaines,TD Bank/Banque TD - Insurance / Assurances,TD Bank/Banque TD - Internal Audit / Audit interne,TD Bank/Banque TD - Legal / Contentieux,TD Bank/Banque TD - Marketing / Marketing,TD Bank/Banque TD - Money In Customer Service / Service à la clientèle-placements,TD Bank/Banque TD - Money Out Customer Service / Service à la clientèle-placements,TD Bank/Banque TD - PBDE / EPSBP,TD Bank/Banque TD - Platforms & Technology / Plateformes et technologie,TD Bank/Banque TD - Risk / Risques,TD Bank/Banque TD - Strategy, Change and Operational Excellence / Stratégie, changement et excellence opérationnelle,TD Bank/Banque TD - Technology / Technologie,TD Bank/Banque TD - Transformation Office / Bureau de transformation,TD Bank/Banque TD - NACO / ACAN,TD Bank/Banque TD - TD Securities / Valeurs mobilières TD,TD Bank/Banque TD - Wealth / Gestion de patrimoine,BMO/Banque de Montreal - Canadian P&BB-Distribution / Services bancaires PE Canada-Distribution,BMO/Banque de Montreal - Canadian P&BB-Analytics / Services bancaires PE Canada-Analyses,BMO/Banque de Montreal - Canadian P&BB-Virtual Connect / Services bancaires PE Canada-Connexion virtuelle,BMO/Banque de Montreal - Canadian P&BB-NARP / Services bancaires PE Canada-NARP,BMO/Banque de Montreal - Canadian P&BB / Services bancaires PE Canada,BMO/Banque de Montreal - Canadian P&BB-Digital / Services bancaires PE Canada-Numérique,BMO/Banque de Montreal - Canadian P&BB-Product / Services bancaires PE Canada-Produits et expérience,BMO/Banque de Montreal - Nesbitt Burns,BMO/Banque de Montreal - Wealth Management / Gestion de patrimoine,BMO/Banque de Montreal - Private Banking / Gestion bancaire privée,BMO/Banque de Montreal - Other / Autre,Scotiabank/Banque Scotia - Audit / Audit,Scotiabank/Banque Scotia - Canada Commercial / Services bancaires commerciaux-Canada,Scotiabank/Banque Scotia - Canada Retail / Services bancaires aux particuliers-Canada,Scotiabank/Banque Scotia - Canadian Branch Banking / Réseau canadien de succursales,Scotiabank/Banque Scotia - Compliance & AML / Conformité/LCBA,Scotiabank/Banque Scotia - Finance / Affaires financières,Scotiabank/Banque Scotia - Global Banking & Markets (GBM) / Services bancaires et marchés mondiaux (SBMM),Scotiabank/Banque Scotia - Global Operations / Exploitation globale,Scotiabank/Banque Scotia - Global Wealth Engineering (GWE) / Ingénierie-Gestion de patrimoine mondiale,Scotiabank/Banque Scotia - Head Office / Siège social,Scotiabank/Banque Scotia - HR / Ressources humaines,Scotiabank/Banque Scotia - International/Digital Banking / Services bancaires numériques-Opérations internationales,Scotiabank/Banque Scotia - GRM  / Gestion du risque global,Scotiabank/Banque Scotia - Scotia Dealer Advantage / Avantage Concessionnaire de la Banque Scotia,Scotiabank/Banque Scotia - Scotiabank Retirees / Retraités de la Banque Scotia,Scotiabank/Banque Scotia - Technology / Technologie,Scotiabank/Banque Scotia - Wealth / Gestion de patrimoine,Scotiabank/Banque Scotia - Other / Autre`.trim();
const __custom_dd_groups_french = `Abbott - Diabetes Care,Abbott - Nutrition,AGF Management Limited/Société de gestion AGF Limitée - AGF Management,AGF Management Limited/Société de gestion AGF Limitée - AGF Investments,Aon - Aon Hewitt,Aon - Aon Minet,Aon - Aon Risk Solutions,Aon - Aon Reinsurance Solutions,Banque Nationale/National Bank of Canada - Technologie de l'information/Information Technology,Banque Nationale/National Bank of Canada - Entreprise et assurances/Commercial Banking and Insurance,Banque Nationale/National Bank of Canada - Expérience employé/Employee Experience,Banque Nationale/National Bank of Canada - Finance et trésorerie/Finance,Banque Nationale/National Bank of Canada - Gestion de patrimoine/Wealth Management,Banque Nationale/National Bank of Canada - Gestion des risques/Risk Management,Banque Nationale/National Bank of Canada - Marchés financiers/Financial Markets,Banque Nationale/National Bank of Canada - Opérations/Operations,Banque Nationale/National Bank of Canada - Particuliers et expérience client/Personal Banking and Client Experience,CIBC - Intria,CIBC - Technology & Operations,Desjardins - Marché des capitaux/Capital Markets,Desjardins - Contentieux/Legal,IA Financial Group/IA Groupe Financier - Insurance,McMillan LLP - McMillan S.E.N.C.R.L.,RBC/Banque Royale - Advice Center/Centre de conseils,RBC/Banque Royale - Business Financial Services / Services financiers aux entreprises,RBC/Banque Royale - Canadian Banking / Services bancaires régionaux,RBC/Banque Royale - Capital Markets /Marchés des capitaux,RBC/Banque Royale - Career Sales Force/Équipes de vente de carrière,RBC/Banque Royale - Direct Investing / RBC Placements en Direct ,RBC/Banque Royale - Financial planning / Planification financière,RBC/Banque Royale - Functions / Fonctions,RBC/Banque Royale - Global Asset Management /Gestion mondiale d’actifs ,RBC/Banque Royale - Group Advantage/Avantages collectifs,RBC/Banque Royale - Insurance / Assurances,RBC/Banque Royale - Integrated Markets / Marchés intégrés ,RBC/Banque Royale - Investor & Treasury Services / Services aux investisseurs et de trésorerie,RBC/Banque Royale - Other / Autre,RBC/Banque Royale - Personal & Commercial Banking / Services bancaires régionaux,RBC/Banque Royale - Private Banking /Gestion privée,RBC/Banque Royale - RBC Dominion Securities / RBC Dominion valeurs mobilière,RBC/Banque Royale - Technology & Operations / Technologie et exploitation ,RBC/Banque Royale - Wealth Management / Gestion de patrimoine,TD Bank/Banque TD - Audit / Audit,TD Bank/Banque TD - Banking / Bancaire,TD Bank/Banque TD - Branch Banking / Succursale bancaire,TD Bank/Banque TD - Business Banking / Services bancaires aux entreprises,TD Bank/Banque TD - Chiefs / Chiefs,TD Bank/Banque TD - Compliance / Conformité,TD Bank/Banque TD - Customer Assistance / Assistance client d'affaires,TD Bank/Banque TD - Customer Platforms / Plateformes clients,TD Bank/Banque TD - Digital Channels / Canaux numériques,TD Bank/Banque TD - Enterprise Protect / Protéger l'entreprise,TD Bank/Banque TD - Finance / Finances,TD Bank/Banque TD - Fraud Operations / Opérations de fraude,TD Bank/Banque TD - GAML / LMCBA,TD Bank/Banque TD - Human Resources / Ressources humaines,TD Bank/Banque TD - Insurance / Assurances,TD Bank/Banque TD - Internal Audit / Audit interne,TD Bank/Banque TD - Legal / Contentieux,TD Bank/Banque TD - Marketing / Marketing,TD Bank/Banque TD - Money In Customer Service / Service à la clientèle-placements,TD Bank/Banque TD - Money Out Customer Service / Service à la clientèle-placements,TD Bank/Banque TD - PBDE / EPSBP,TD Bank/Banque TD - Platforms & Technology / Plateformes et technologie,TD Bank/Banque TD - Risk / Risques,TD Bank/Banque TD - Strategy, Change and Operational Excellence / Stratégie, changement et excellence opérationnelle,TD Bank/Banque TD - Technology / Technologie,TD Bank/Banque TD - Transformation Office / Bureau de transformation,TD Bank/Banque TD - NACO / ACAN,TD Bank/Banque TD - TD Securities / Valeurs mobilières TD,TD Bank/Banque TD - Wealth / Gestion de patrimoine,BMO/Banque de Montreal - Canadian P&BB-Distribution / Services bancaires PE Canada-Distribution,BMO/Banque de Montreal - Canadian P&BB-Analytics / Services bancaires PE Canada-Analyses,BMO/Banque de Montreal - Canadian P&BB-Virtual Connect / Services bancaires PE Canada-Connexion virtuelle,BMO/Banque de Montreal - Canadian P&BB-NARP / Services bancaires PE Canada-NARP,BMO/Banque de Montreal - Canadian P&BB / Services bancaires PE Canada,BMO/Banque de Montreal - Canadian P&BB-Digital / Services bancaires PE Canada-Numérique,BMO/Banque de Montreal - Canadian P&BB-Product / Services bancaires PE Canada-Produits et expérience,BMO/Banque de Montreal - Nesbitt Burns,BMO/Banque de Montreal - Wealth Management / Gestion de patrimoine,BMO/Banque de Montreal - Private Banking / Gestion bancaire privée,BMO/Banque de Montreal - Other / Autre,Scotiabank/Banque Scotia - Audit / Audit,Scotiabank/Banque Scotia - Canada Commercial / Services bancaires commerciaux-Canada,Scotiabank/Banque Scotia - Canada Retail / Services bancaires aux particuliers-Canada,Scotiabank/Banque Scotia - Canadian Branch Banking / Réseau canadien de succursales,Scotiabank/Banque Scotia - Compliance & AML / Conformité/LCBA,Scotiabank/Banque Scotia - Finance / Affaires financières,Scotiabank/Banque Scotia - Global Banking & Markets (GBM) / Services bancaires et marchés mondiaux (SBMM),Scotiabank/Banque Scotia - Global Operations / Exploitation globale,Scotiabank/Banque Scotia - Global Wealth Engineering (GWE) / Ingénierie-Gestion de patrimoine mondiale,Scotiabank/Banque Scotia - Head Office / Siège social,Scotiabank/Banque Scotia - HR / Ressources humaines,Scotiabank/Banque Scotia - International/Digital Banking / Services bancaires numériques-Opérations internationales,Scotiabank/Banque Scotia - GRM  / Gestion du risque global,Scotiabank/Banque Scotia - Scotia Dealer Advantage / Avantage Concessionnaire de la Banque Scotia,Scotiabank/Banque Scotia - Scotiabank Retirees / Retraités de la Banque Scotia,Scotiabank/Banque Scotia - Technology / Technologie,Scotiabank/Banque Scotia - Wealth / Gestion de patrimoine,Scotiabank/Banque Scotia - Other / Autre`.trim();

const company_dd_id = '[id=attribute1]';
const division_dd_id = '[id=attribute4]';

/*
const __custom_dd_groups_english: string = wany.__custom_dd_groups_english.trim();
const __custom_dd_groups_french: string = wany.__custom_dd_groups_french.trim();

const company_dd_id: string = wany.__company_dd_id;
const division_dd_id: string = wany.__division_dd_id;
*/

const dd_splitter = (inputString = '') => {
  const delimiter = ' - ';

  // Find the index of the last occurrence of the delimiter
  let lastIndex = inputString.lastIndexOf(delimiter);

  // Check if the delimiter is found in the string
  if (lastIndex !== -1) {
    // Split the string using substring
    let firstPart = inputString.substring(0, lastIndex)?.trim();
    let secondPart = inputString.substring(lastIndex + delimiter.length)?.trim();

    // Output the results
    console.log(firstPart);  // Output: hallow - pikachu - pokemon - charizard
    console.log(secondPart); // Output: bulbasaur
    return [firstPart, secondPart];
  } else {
    // If the delimiter is not found, handle accordingly
    return [inputString, '']
  }
};

const addPcpantClick$ = fromEvent(document, 'click').pipe(
  filter(e => {
    const btn = (e.target as HTMLElement).closest('.btn-add-participant');
    return !!btn;
  }),
  take(1)
);

console.log('start initing dds');

const catchIt = () => {
  return (source:Observable<any>) => source.pipe(
    catchError(err => {
      console.error('init dd error:', err);
      return EMPTY;
    })
  );
};

wany.__starter = merge(
  addPcpantClick$,
  interval(500)
).pipe(
  map(() => {
    const ddCompanyNotInit = document.querySelectorAll(`${company_dd_id}:not([dd-init])`) ?? [];
    ddCompanyNotInit.length && console.log('ddCompanyNotInit', ddCompanyNotInit);
    for (let index = 0; index < ddCompanyNotInit.length; index++) {
      const element = ddCompanyNotInit[index];
      const rsField = element.closest('rs-field');
      if (rsField?.querySelector(division_dd_id) &&
        rsField?.querySelector(division_dd_id)?.closest('rs-field-input')) {
        console.log('init this dd', element);
        wany.__initCascadingDD(element as any);
      }
    }
  })
).subscribe();

wany.__initCascadingDD = (element: HTMLElement) => {
  
  const removed$ = interval(1000).pipe(
    map(() => !document.contains(element)),
    filter(removed => removed),
    take(1)
  );

  element.setAttribute('dd-init', 'true');
  console.log('custom_dd_groups initialized');
  const __custom_dd_groups = document.documentElement.lang == 'fr' ? __custom_dd_groups_french : __custom_dd_groups_english;
  const __custom_dd_groups_options = __custom_dd_groups.replace('\n', '').split(',').filter(x => x?.length).map(x => {
    return dd_splitter(x);
  });

  const rsField: HTMLElement = element.closest('rs-field') as HTMLElement;
  const attr4 = rsField.querySelector(division_dd_id)!.closest('rs-field-input') as HTMLElement;
  const attr4shownDisplay = attr4.style.display;
  attr4.style.display = "none";

  if (element.matches('select')) {
    const companySelect = element as HTMLSelectElement;
    fromEvent(companySelect, 'change').pipe(
      switchMap(() => timer(100)),
      tap(() => {
        const attr1Selected = companySelect.value ?? '';
        console.log('company selected ', attr1Selected);
        if (attr1Selected) {
          const hasMatch = __custom_dd_groups_options.some(x => x[0] == attr1Selected);
          attr4.style.display = hasMatch ? attr4shownDisplay : 'none';
        } else {
          attr4.style.display = "none";
        }
      }),
      takeUntil(removed$)
    ).subscribe();
  } else {
    const matDDContainer = element.closest('.mat-mdc-form-field-flex')!
    fromEvent(matDDContainer, 'click').pipe(
      switchMap(() => timer(10)),
      switchMap(() => {
        return fromEvent(document, 'click').pipe(take(1));
      }),
      tap(() => {
        const attr1Selected = (element as any).value ??
          element.querySelector<HTMLElement>('.mat-mdc-select-value')?.innerText ?? '';

        console.log('attr1Selected', attr1Selected);

        if (attr1Selected) {
          const hasMatch = __custom_dd_groups_options.some(x => x[0] == attr1Selected);
          attr4.style.display = hasMatch ? attr4shownDisplay : 'none';
        } else {
          attr4.style.display = "none";
        }
      }),
      takeUntil(removed$)
    ).subscribe();
  }
};
