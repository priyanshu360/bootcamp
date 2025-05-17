const BackgroundEffects = () => {
  return (
    <>
      {/* Circuit pattern overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>
      
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 z-0"></div>
      
      {/* Grid lines */}
      <div className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(to right, #4f46e5 1px, transparent 1px), 
                            linear-gradient(to bottom, #4f46e5 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      ></div>
    </>
  );
};

export default BackgroundEffects;