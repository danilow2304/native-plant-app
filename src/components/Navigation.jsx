function Navigation({ view, onChangeView }) {
  const tabs = [
    { id: "collection", label: "My collection" },
    { id: "discover", label: "Find more plants" },
  ];

  return (
    <nav className="site-nav" aria-label="Main">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          className={view === tab.id ? "tab active" : "tab"}
          aria-current={view === tab.id ? "page" : undefined}
          onClick={() => onChangeView(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}

export default Navigation;
