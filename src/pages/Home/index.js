import ConversationFlowForm from '../../components/Form/ConversationFlowForm'
import Documentation from '../..//components/Documentation'
import Banner from '../../components/Banner';
import { Cookies } from 'react-cookie';

function Home() {
  const cookies = new Cookies();
  const token = cookies.get('userid')

    return (
      <div>
        <header>
          <Banner/>
          <br/>
          <Documentation />
        </header>
      </div>
    );
  }
  
  export default Home;
