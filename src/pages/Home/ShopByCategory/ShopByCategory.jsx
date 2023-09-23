import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const ShopByCategory = () => {
   const [activeTab, setActiveTab] = useState()
   console.log('dd', activeTab)
   useEffect(()=>{
      fetch('product.json')
      .then(res=>res.json())
      .then(data=>setActiveTab(data))
   },[])
   return (
      <div className='bg-slate-50'>
         <div className='sm:px-10 md:px-16 sm:2 md:py-2 mt-10 text-center'>
            <h2 className='text-4xl text-primary font-medium py-10'>Shop By Category</h2>
            <div className=''>
               <Tabs>
                  <TabList>
                     <Tab ><button className='bg-background py-2 px-5 rounded-md text-xl text-white hover:bg-primary'>Sports Car</button></Tab>
                     <Tab><button className='bg-background py-2 px-5 rounded-md text-xl text-white hover:bg-primary'>Truck</button></Tab>
                     <Tab><button className='bg-background py-2 px-5 rounded-md text-xl text-white hover:bg-primary'>Regular Car</button></Tab>
                     <Tab><button className='bg-background py-2 px-5 rounded-md text-xl text-white hover:bg-primary'>Fire Truck</button></Tab>
                     <Tab><button className='bg-background py-2 px-5 rounded-md text-xl text-white hover:bg-primary'>Police Car</button></Tab>
                  </TabList>

                  <div className='py-10'>
                     <TabPanel>
                        <h2>Any content 1</h2>
                     </TabPanel>
                     <TabPanel>
                        <h2>Any content 2</h2>
                     </TabPanel>
                     <TabPanel>
                        <h2>Any content 3</h2>
                     </TabPanel>
                     <TabPanel>
                        <h2>Any content 4</h2>
                     </TabPanel>
                     <TabPanel>
                        <h2>Any content 5</h2>
                     </TabPanel>
                  </div>
               </Tabs>
            </div>
         </div>
      </div>
   );
};

export default ShopByCategory;