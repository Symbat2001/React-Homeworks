echo "Please enter your project name"
read project_name

mkdir -p $project_name
cd $project_name
echo "Project created successfully"
npm create vite@latest
