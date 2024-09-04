import { useState } from "react";
import {projects} from './data/projects';
import ProjectList from './ProjectList';
import Toolbar from './Toolbar';

function Portfolio() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const filters = ["All", "Websites", "Flayers", "Business Cards"];

  const filterHandler = (filter) => {
    console.log('Начало filterHandler');
    setSelectedFilter(filter);
    console.log(selectedFilter);
  };

  const filterProjects = selectedFilter === "All" ? projects : projects.filter(project => (project.category === selectedFilter));

  return (
    <div className="container">
      <Toolbar 
        filters={filters}
        selected={selectedFilter}
        onSelectFilter={filterHandler}/>
      <ProjectList 
        projects={filterProjects}/>
    </div>
  )
}

export default Portfolio;
