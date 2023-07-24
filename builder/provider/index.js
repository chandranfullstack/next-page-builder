import { ThemeProvider } from "../context/builder-context";
import Editor from "../editor";

const ContentProviderBase = ({ data, standaloneServer,pages }) => {

return(
    <ThemeProvider>
      <div className='h-full'>
       <Editor data={data} standaloneServer={false} pages={pages}></Editor>
      </div>
    </ThemeProvider>
)};

export default ContentProviderBase