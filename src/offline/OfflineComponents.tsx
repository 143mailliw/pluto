import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Button from "../components/controls/Button";
import Intent from "../components/Intent";
import Page from "../components/layout/Page";
import PageContainer from "../components/layout/PageContainer";
import PageHeader from "../components/layout/PageHeader";
import List from "../components/list/List";
import Callout from "../components/text/Callout";

function OfflineComponents(): JSX.Element {
  return (
    <Page>
      <PageContainer>
        <PageHeader>
          My Projects
        </PageHeader>
        <Callout
          icon={faExclamationTriangle}
          intent={Intent.WARNING}
        >Saving is unimplemented.</Callout>
        <List
          name="Saving is unimplemented"
          actions={<>
            <Link to="/editor">
              <Button
                small 
              >
                Open Editor
              </Button>
            </Link>
          </>}
        >

        </List>
      </PageContainer>
    </Page>   
  );
}

export default OfflineComponents;
