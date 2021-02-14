let project = new Project('Shader');

project.addSources('Sources');

project.addShaders('Shaders/**');

resolve(project);
