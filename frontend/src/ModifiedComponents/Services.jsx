import taxaudit from '../Image/taxaudit.jpeg'
import accounting from'../Image/accounting.jpeg'
import companyRegister from'../Image/companyRegister.jpeg'
import gstregistration from'../Image/gstregistration.jpg'
import otherservices from'../Image/otherservices.png'
import tax from'../Image/tax.svg'
import tds from '../Image/tds.jpeg'

export function Services() {
  return (
    <div id="services">
      <div className="text-black italic text-center text-4xl font-bold mt-1">
        Our Services
      </div>
      <br />
      <div className="mx-14 my-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-black">
        <div className="min-h-min p-4 font-semibold border-2 text-2xl lg:text-3xl m-5   w-72  lg:w-80 lg:min-h-min  border-slate-400 rounded-lg">
        <div className='min-h-min mb-1'>
            <img src={companyRegister}  />
          </div>
          Company Registration and litigations
        </div>
        <div className="p-4  border-2 text-2xl lg:text-3xl m-5   w-72 h-64 lg:w-80 lg:h-72  border-slate-400 rounded-lg">
          <div className='min-h-min mb-1'>
            <img src={taxaudit}  />
          </div>
          Tax Audits
        </div>
        <div className="p-4   border-2 text-2xl lg:text-3xl m-5   w-72 min-h-min lg:w-80 lg:min-h-min  border-slate-400 rounded-lg">
        <div className='min-h-min mb-1'>
            <img src={tax}  />
          </div>
          Income Tax Compliances and litigations
        </div>
        <div className="p-4   border-2 text-2xl lg:text-3xl m-5   w-72 h-64 lg:w-80 lg:h-72  border-slate-400 rounded-lg">
        <div className='min-h-min mb-1'>
            <img src={gstregistration}  />
          </div>
          GST Registration
        </div>
        <div className="p-4   border-2 text-2xl lg:text-3xl m-5   w-72 h-64 lg:w-80 lg:h-72  border-slate-400 rounded-lg">
        <div className='min-h-min mb-1'>
            <img src={tds}  />
          </div>
          TDS/TCS returns
        </div>
        <div className="p-4   border-2 text-2xl lg:text-3xl m-5   w-72 h-64 lg:w-80 lg:h-72  border-slate-400 rounded-lg">
        <div className='min-h-min mb-1'>
            <img src={accounting}  />
          </div>
          Accounting Services
        </div>
        <div className="p-4   border-2 text-2xl lg:text-3xl m-5   w-72 h-64 lg:w-80 lg:h-72  border-slate-400 rounded-lg">
        <div className='min-h-min mb-1'>
            <img src={otherservices}  />
          </div>
          Other Services
        </div>
      </div>
    </div>
  );
}
