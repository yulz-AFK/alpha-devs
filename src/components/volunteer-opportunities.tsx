'use client'

import { Calendar, Globe, Lightbulb, Laptop, Tent, Leaf } from 'lucide-react'

export function VolunteerOpportunitiesComponent() {
  const opportunities = [
    { title: 'Volunteer Virtually', icon: Laptop, bgImage: 'https://scontent.fceb2-2.fna.fbcdn.net/v/t39.30808-6/309001368_1536662033445120_1328913951753326809_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGRdQcek8WoSsCCYLAzNIVdeHCHhDdXVvR4cIeEN1dW9BseygQryJ2rehdGJNvLEMajSqOwZtj8EK9x3Gj_ewta&_nc_ohc=kyn656tc5M8Q7kNvgGyMEhK&_nc_zt=23&_nc_ht=scontent.fceb2-2.fna&_nc_gid=AdgkDIlIIJp9_9fob63CHWr&oh=00_AYAIYs7EjQWxNbflPtI8qPjX1c5ux3vRpVNFZSBlbYIBTw&oe=671B319A' },
    { title: 'Educate and Engage Others', icon: Lightbulb, bgImage: 'https://rs.projects-abroad.org/v1/hero/product-5c6be6e3095c2.[1600].jpeg' },
    { title: 'Support Climate Solutions', icon: Globe, bgImage: 'https://www.greenpeace.org/static/planet4-philippines-stateless/2019/05/4ea8cc42-18278214_10211556874331254_5212795212765759391_o.jpg' },
    { title: 'One Day Events', icon: Calendar, bgImage: 'https://journal.com.ph/wp-content/uploads/2023/07/Cleanup-1-1200x800.jpg' },
    { title: 'Lodging Offered', icon: Tent, bgImage: 'https://www.dynatrap.com/media/wysiwyg/Articles/DynaTrap/DT_setting-up-your-campsite-to-avoid-mosquitoes.jpg' },
    { title: 'Care for our Natural Resources', icon: Leaf, bgImage: 'https://goharibon.wordpress.com/wp-content/uploads/2015/08/gedc0285.jpg' },
  ]

  return (
    <div>
      <div className="text-center text-4xl md:text-8xl font-bold" style={{ visibility: 'hidden' }}>
        <p>BLANK</p>
      </div>
      <div className="mx-auto px-7 py-8 rounded-xl" style={{ width: '90%', backgroundColor: 'rgba(4, 30, 37, 0.7)' }}>
        <h1 className="text-[#179eb0] text-4xl font-bold text-center mb-4 mt-4" style={{ userSelect: 'none' }}>Project Opportunities</h1>
        <div className="bg-[#fff] w-44 h-1 bg-primary mx-auto mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {opportunities.map((opportunity, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer ${
                index === 4 || index === 5 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{
                backgroundImage: `url(${opportunity.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '250px',
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 hover:bg-opacity-70 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-6">
                <opportunity.icon className="w-12 h-12 mb-4 text-[#fff]" style={{ userSelect: 'none' }} />
                <h3 className="text-xl font-semibold text-center text-[#fff]" style={{ userSelect: 'none' }}>{opportunity.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
