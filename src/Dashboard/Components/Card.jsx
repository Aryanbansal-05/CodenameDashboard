const Card = ({ title, children }) => (
  <div className="bg-white rounded-2xl p-5 shadow-sm">
    <h3 className="font-medium mb-4">{title}</h3>
    {children}
  </div>
);

export default Card;
