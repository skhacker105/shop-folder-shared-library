@echo off
cls
:: locations of all application
set baseLocation=D:\ShopFolderContainer\
set sharedLib=%baseLocation%SharedLibrary\
set sf=%baseLocation%shop-folder\
set sfHome=%baseLocation%shop-folder-home\
set sfLogin=%baseLocation%shop-folder-login\
set sfTodo=%baseLocation%shop-folder-todo\
set sfContact=%baseLocation%shop-folder-contact\

:: other variables
set selectedLibrary=_

:: BUILD & PUBLISH
:: Ask for which library to udpate
echo :
echo Select Library for build and publish
:: echo css: for Styles
echo cmp: for Component
echo core: for Core
echo log: for Logger
echo logo: for Logo
echo directive: for Directive
echo all: for All
set /p buildFor=[cmp/core/log/logo/directive/all]?:

:: IF /i %buildFor%==css goto css
IF /i %buildFor%==cmp goto component
IF /i %buildFor%==core goto core
IF /i %buildFor%==log goto logger
IF /i %buildFor%==logo goto logo
IF /i %buildFor%==directive goto directive
IF /i %buildFor%==all goto component
echo Library code not found
goto libBuildPublishExit

:: ================================================================================================
:: ================================================================================================

:: COMPONENT
:: =========
:component
cd %sharedLib%\projects\shop-folder-component
CALL npm version patch
cd %sharedLib%
CALL ng build shop-folder-component --configuration=production
cd %sharedLib%\dist\shop-folder-component
CALL npm publish && (echo Published Component) || (echo Error while publishing Component)

:: update applications
set selectedLibrary=shop-folder-component
cd %sf%
CALL updatepackage.bat %selectedLibrary% true
cd %sfHome%
CALL updatepackage.bat %selectedLibrary% true
cd %sfLogin%
CALL updatepackage.bat %selectedLibrary% true
cd %sfTodo%
CALL updatepackage.bat %selectedLibrary% true
cd %sfContact%
CALL updatepackage.bat %selectedLibrary% true
IF /i NOT %buildFor%==all goto libBuildPublishExit

:: ================================================================================================
:: ================================================================================================

:: CORE
:: =========
:core
cd %sharedLib%\projects\shop-folder-core
CALL npm version patch
cd %sharedLib%
CALL ng build shop-folder-core --configuration=production
cd %sharedLib%\dist\shop-folder-core
CALL npm publish && (echo Published Core) || (echo Error while publishing Core)

:: update applications
set selectedLibrary=shop-folder-core
cd %sharedLib%
CALL updatepackage.bat %selectedLibrary% true
cd %sf%
CALL updatepackage.bat %selectedLibrary% true
cd %sfHome%
CALL updatepackage.bat %selectedLibrary% true
cd %sfLogin%
CALL updatepackage.bat %selectedLibrary% true
cd %sfTodo%
CALL updatepackage.bat %selectedLibrary% true
cd %sfContact%
CALL updatepackage.bat %selectedLibrary% true
IF /i NOT %buildFor%==all goto libBuildPublishExit


:: ================================================================================================

:: LOGO
:: =========
:logo
cd %sharedLib%\projects\shop-folder-logo
CALL npm version patch
cd %sharedLib%
CALL ng build shop-folder-logo --configuration=production
cd %sharedLib%\dist\shop-folder-logo
CALL npm publish && (echo Published Logo) || (echo Error while publishing Logo)

:: update applications
set selectedLibrary=shop-folder-logo
cd %sf%
CALL updatepackage.bat %selectedLibrary% true
cd %sfHome%
CALL updatepackage.bat %selectedLibrary% true\
cd %sfTodo%
CALL updatepackage.bat %selectedLibrary% true
cd %sfContact%
CALL updatepackage.bat %selectedLibrary% true
IF /i NOT %buildFor%==all goto libBuildPublishExit


:: ================================================================================================


:: LOGGER
:: ------
:logger
cd %sharedLib%\projects\shop-folder-logger
CALL npm version patch
cd %sharedLib%
CALL ng build shop-folder-logger --configuration=production
cd %sharedLib%
cd dist\shop-folder-logger
CALL npm publish && (echo Published Logger) || (echo Error while publishing Logger)

:: update applications
set selectedLibrary=shop-folder-logger
cd %sf%
CALL updatepackage.bat %selectedLibrary% true
cd %sharedLib%
CALL updatepackage.bat %selectedLibrary% true
cd %sfHome%
CALL updatepackage.bat %selectedLibrary% true
cd %sfLogin%
CALL updatepackage.bat %selectedLibrary% true
cd %sfTodo%
CALL updatepackage.bat %selectedLibrary% true
cd %sfContact%
CALL updatepackage.bat %selectedLibrary% true
IF /i NOT %buildFor%==all goto libBuildPublishExit


:: ================================================================================================


:: DIRECTIVE
:: ------
:directive
cd %sharedLib%\projects\shop-folder-directive
CALL npm version patch
cd %sharedLib%
CALL ng build shop-folder-directive --configuration=production
cd %sharedLib%
cd dist\shop-folder-directive
CALL npm publish && (echo Published Directive) || (echo Error while publishing Directive)

:: update applications
set selectedLibrary=shop-folder-directive
cd %sf%
CALL updatepackage.bat %selectedLibrary% true
cd %sharedLib%
CALL updatepackage.bat %selectedLibrary% true
cd %sfHome%
CALL updatepackage.bat %selectedLibrary% true
cd %sfLogin%
CALL updatepackage.bat %selectedLibrary% true
cd %sfTodo%
CALL updatepackage.bat %selectedLibrary% true
cd %sfContact%
CALL updatepackage.bat %selectedLibrary% true
IF /i NOT %buildFor%==all goto libBuildPublishExit

:: ===========================================================================

:: EXIT after Building and Publishing selected Library
:libBuildPublishExit
cd %sharedLib%

echo  Build completed for "%buildFor%" on %time%