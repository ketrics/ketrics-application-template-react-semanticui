DECLARE @database VARCHAR(100)='{database}';
DECLARE @year VARCHAR(4)='{year}';

SELECT
    @database AS Base_Datos,
    @year AS Ano,
    GETDATA() AS Ahora
INTO #tmp_data
