SETLOCAL ENABLEDELAYEDEXPANSION
set i=1
for %%f in (album*) do (
	ren %%f 'album%i%'.jpg
	set /a i= %i% + 1
	)
pause