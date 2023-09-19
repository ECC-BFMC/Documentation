New component
==============================

When you want to implement some new feature, it's recommended to keep clean the project structure. With this in mind, you will notice that the "include"
and the "source" directory are following the same structure, ".hpp" files being under the the "include" and ".cpp" files under source. 

Usually, when adding new components, they should be added to the "CMakeList.txt", but in this case, all the subdirectories are automatically included, as
long as they are within the same structure. If you wish to add a new layer, modifications must be done to the file, adding the new layer.

**Utilizing the newComponent.py Script**

To facilitate the addition of new components to the project, utilize the newComponent.py script. This script automates the process of creating the necessary files and directories for a new component, adhering to the existing structure of the project. Here is how you can use the script:

1. Navigate to the directory where the newComponent.py script is located (should be inside the project directory).
2. Run the script in a terminal or an IDE.
3. When prompted, input the category of the component (valid options are "brain," "driver," "periodics," or "utils").
4. Next, input the name of the new component.

Notes
------

The script for creating a new component (newComponent.py) and for flashing the micro-controller weren't projected to linux usage, so we cannot guarantee the 
correct working. 