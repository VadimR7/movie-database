import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { CreditsData, ItemWithTitleInt } from '../../common/ts/types';
import CastList from './CastList';
import CrewList from './CrewList';
import DetailsList from './DetailsList';
import GenresList from './GenresList';

interface InfoTabsProps {
  creditsData: CreditsData;
  detailsData: ItemWithTitleInt[];
  genresData: string[];
}

const InfoTabs = ({ creditsData, detailsData, genresData }: InfoTabsProps) => {
  const { crew, cast } = creditsData;

  return (
    <Tabs>
      <TabList>
        <Tab>CAST</Tab>
        <Tab>CREW</Tab>
        <Tab>DETAILS</Tab>
        <Tab>GENRES</Tab>
      </TabList>

      <TabPanel>
        <CastList castMembers={cast} />
      </TabPanel>
      <TabPanel>
        <CrewList crewMembers={crew} />
      </TabPanel>
      <TabPanel>
        <DetailsList detailsData={detailsData} />
      </TabPanel>
      <TabPanel>
        <GenresList genresData={genresData} />
      </TabPanel>
    </Tabs>
  );
};

export default InfoTabs;
