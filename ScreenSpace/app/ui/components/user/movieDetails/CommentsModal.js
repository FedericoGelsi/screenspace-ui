import React from 'react';
import {StyleSheet, Text, View, FlatList, TextInput} from 'react-native';
import Modal from 'react-native-modal';
import {Divider, Button, Avatar} from '@ui-kitten/components';
import RatingComponent from '../../RatingComponent';
import {NoData} from '../../NoData';

const imageBytes =
  'iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAMPmlDQ1BJQ0MgUHJvZmlsZQAASImVVwdYU8kWnluSkEBooUsJvQkiNYCUEFrovdkISYBQYgwEFTu6qODaxQI2dFVEwUqzI4qFRbH3xYKKsi4W7MqbFNB1X/nefN/c+e8/Z/5z5szcMgConeCIRHmoOgD5wkJxXEgAPSU1jU56CghAB2gDD6DN4RaImDExEQCWofbv5d11gEjbKw5SrX/2/9eiweMXcAFAYiDO4BVw8yE+CABexRWJCwEgSnnzKYUiKYYVaIlhgBAvlOIsOa6S4gw53iuzSYhjQdwGgJIKhyPOAkD1EuTpRdwsqKHaD7GTkCcQAqBGh9g3P38SD+J0iG2gjQhiqT4j4wedrL9pZgxrcjhZw1g+F1lRChQUiPI40/7PdPzvkp8nGfJhBatKtjg0TjpnmLebuZPCpVgF4j5hRlQ0xJoQfxDwZPYQo5RsSWii3B415BawYM7gSgPUiccJDIfYEOJgYV5UhILPyBQEsyGGOwSdKihkJ0CsB/FCfkFQvMJms3hSnMIX2pApZjEV/FmOWOZX6uu+JDeRqdB/nc1nK/Qx1eLshGSIKRBbFAmSoiBWhdixIDc+XGEzpjibFTVkI5bESeO3gDiOLwwJkOtjRZni4DiFfVl+wdB8sc3ZAnaUAu8vzE4IlecHa+NyZPHDuWCX+EJm4pAOvyAlYmguPH5gkHzu2DO+MDFeofNBVBgQJx+LU0R5MQp73IyfFyLlzSB2LSiKV4zFkwrhhpTr45miwpgEeZx4cQ4nLEYeD74MRAAWCAR0IIE1A0wCOUDQ2dfYB+/kPcGAA8QgC/CBg4IZGpEs6xHCazwoBn9CxAcFw+MCZL18UAT5r8Os/OoAMmW9RbIRueAJxPkgHOTBe4lslHDYWxJ4DBnBP7xzYOXCePNglfb/e36I/c4wIROhYCRDHulqQ5bEIGIgMZQYTLTFDXBf3BuPgFd/WJ1xBu45NI/v9oQnhC7CQ8I1Qjfh1kRBifinKCNBN9QPVuQi48dc4FZQ0w0PwH2gOlTGdXAD4IC7Qj9M3A96doMsSxG3NCv0n7T/NoMfVkNhR3Yio2Rdsj/Z5ueRqnaqbsMq0lz/mB95rBnD+WYN9/zsn/VD9nmwDf/ZEluIHcDasZPYOewI1gjo2HGsCevAjkrx8O56LNtdQ97iZPHkQh3BP/wNraw0kwVOtU69Tl/kfYX8qdJ3NGBNEk0TC7KyC+lM+EXg09lCruNIurOTswsA0u+L/PX1Jlb23UB0Or5z8/4AwOf44ODg4e9c2HEA9nnAx7/5O2fDgJ8OZQDONnMl4iI5h0svBPiWUINPmj4wBubABs7HGbgDb+APgkAYiAYJIBVMgNFnw30uBlPADDAXlIJysAysBuvBJrAV7AR7wH7QCI6Ak+AMuAAugWvgDtw9PeAF6AfvwGcEQUgIFaEh+ogJYonYI84IA/FFgpAIJA5JRdKRLESISJAZyDykHFmBrEe2IDXIPqQZOYmcQ7qQW8gDpBd5jXxCMVQF1UKNUCt0FMpAmWg4moCOR7PQyWgxOh9dgq5Fq9HdaAN6Er2AXkO70RfoAAYwZUwHM8UcMAbGwqKxNCwTE2OzsDKsAqvG6rAWuM5XsG6sD/uIE3EaTscd4A4OxRNxLj4Zn4UvxtfjO/EGvA2/gj/A+/FvBCrBkGBP8CKwCSmELMIUQimhgrCdcIhwGj5LPYR3RCJRh2hN9IDPYioxhziduJi4gVhPPEHsIj4iDpBIJH2SPcmHFE3ikApJpaR1pN2k46TLpB7SByVlJRMlZ6VgpTQloVKJUoXSLqVjSpeVnip9JquTLcle5GgyjzyNvJS8jdxCvkjuIX+maFCsKT6UBEoOZS5lLaWOcppyl/JGWVnZTNlTOVZZoDxHea3yXuWzyg+UP6poqtipsFTGqUhUlqjsUDmhckvlDZVKtaL6U9OohdQl1BrqKep96gdVmqqjKluVpzpbtVK1QfWy6ks1spqlGlNtglqxWoXaAbWLan3qZHUrdZY6R32WeqV6s/oN9QENmsZojWiNfI3FGrs0zmk80yRpWmkGafI052tu1Tyl+YiG0cxpLBqXNo+2jXaa1qNF1LLWYmvlaJVr7dHq1OrX1tR21U7SnqpdqX1Uu1sH07HSYevk6SzV2a9zXeeTrpEuU5evu0i3Tvey7nu9EXr+eny9Mr16vWt6n/Tp+kH6ufrL9Rv17xngBnYGsQZTDDYanDboG6E1wnsEd0TZiP0jbhuihnaGcYbTDbcadhgOGBkbhRiJjNYZnTLqM9Yx9jfOMV5lfMy414Rm4msiMFllctzkOV2bzqTn0dfS2+j9poamoaYS0y2mnaafzazNEs1KzOrN7plTzBnmmearzFvN+y1MLCItZljUWty2JFsyLLMt11i2W763srZKtlpg1Wj1zFrPmm1dbF1rfdeGauNnM9mm2uaqLdGWYZtru8H2kh1q52aXbVdpd9EetXe3F9hvsO8aSRjpOVI4snrkDQcVB6ZDkUOtwwNHHccIxxLHRseXoyxGpY1aPqp91DcnN6c8p21Od0Zrjg4bXTK6ZfRrZztnrnOl81UXqkuwy2yXJpdXrvaufNeNrjfdaG6RbgvcWt2+unu4i93r3Hs9LDzSPao8bjC0GDGMxYyzngTPAM/Znkc8P3q5exV67ff6y9vBO9d7l/ezMdZj+GO2jXnkY+bD8dni0+1L90333ezb7Wfqx/Gr9nvob+7P89/u/5Rpy8xh7ma+DHAKEAccCnjP8mLNZJ0IxAJDAssCO4M0gxKD1gfdDzYLzgquDe4PcQuZHnIilBAaHro89AbbiM1l17D7wzzCZoa1hauEx4evD38YYRchjmiJRCPDIldG3o2yjBJGNUaDaHb0yuh7MdYxk2MOxxJjY2IrY5/EjY6bEdceT4ufGL8r/l1CQMLShDuJNomSxNYktaRxSTVJ75MDk1ckd6eMSpmZciHVIFWQ2pRGSktK2542MDZo7OqxPePcxpWOuz7eevzU8ecmGEzIm3B0otpEzsQD6YT05PRd6V840ZxqzkAGO6Mqo5/L4q7hvuD581bxevk+/BX8p5k+mSsyn2X5ZK3M6s32y67I7hOwBOsFr3JCczblvM+Nzt2RO5iXnFefr5Sfnt8s1BTmCtsmGU+aOqlLZC8qFXVP9pq8enK/OFy8vQApGF/QVKgFf+Q7JDaSXyQPinyLKos+TEmacmCqxlTh1I5pdtMWTXtaHFz823R8Ond66wzTGXNnPJjJnLllFjIrY1brbPPZ82f3zAmZs3MuZW7u3N9LnEpWlLydlzyvZb7R/DnzH/0S8kttqWqpuPTGAu8FmxbiCwULOxe5LFq36FsZr+x8uVN5RfmXxdzF538d/evaXweXZC7pXOq+dOMy4jLhsuvL/ZbvXKGxonjFo5WRKxtW0VeVrXq7euLqcxWuFZvWUNZI1nSvjVjbtM5i3bJ1X9Znr79WGVBZX2VYtajq/Qbehssb/TfWbTLaVL7p02bB5ptbQrY0VFtVV2wlbi3a+mRb0rb23xi/1Ww32F6+/esO4Y7unXE722o8amp2Ge5aWovWSmp7d4/bfWlP4J6mOoe6LfU69eV7wV7J3uf70vdd3x++v/UA40DdQcuDVYdoh8oakIZpDf2N2Y3dTalNXc1hza0t3i2HDjse3nHE9EjlUe2jS49Rjs0/Nni8+PjACdGJvpNZJx+1Tmy9cyrl1NW22LbO0+Gnz54JPnOqndl+/KzP2SPnvM41n2ecb7zgfqGhw63j0O9uvx/qdO9suOhxsemS56WWrjFdxy77XT55JfDKmavsqxeuRV3rup54/eaNcTe6b/JuPruVd+vV7aLbn+/MuUu4W3ZP/V7FfcP71X/Y/lHf7d599EHgg46H8Q/vPOI+evG44PGXnvlPqE8qnpo8rXnm/OxIb3Dvpedjn/e8EL343Ff6p8afVS9tXh78y/+vjv6U/p5X4leDrxe/0X+z463r29aBmIH77/LffX5f9kH/w86PjI/tn5I/Pf085Qvpy9qvtl9bvoV/uzuYPzgo4og5sl8BDFY0MxOA1zsAoKYCQIPnM8pY+flPVhD5mVWGwH/C8jOirLgDUAf/32P74N/NDQD2boPHL6ivNg6AGCoACZ4AdXEZrkNnNdm5UlqI8BywOeRrRn4G+DdFfub8Ie6fWyBVdQU/t/8CAsd8fYQunQYAAABcZVhJZk1NACoAAAAIAAQBBgADAAAAAQACAAABEgADAAAAAQABAAABKAADAAAAAQACAACHaQAEAAAAAQAAAD4AAAAAAAKgAgAEAAAAAQAAAICgAwAEAAAAAQAAAIAAAAAAmuCr3gAAArZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDYuMC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHRpZmY6Q29tcHJlc3Npb24+MTwvdGlmZjpDb21wcmVzc2lvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6UGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbj4yPC90aWZmOlBob3RvbWV0cmljSW50ZXJwcmV0YXRpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4xMjg8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MTI4PC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+ChBlg0MAAAxKSURBVHgB7V1NkBw3FZbUs38zu97YWc9s4pDEGxv/7S4UBThnfOCET07KhiMujjEHcACfYwjFAV8pnzjgIqni4BsH+0JRiYuCquyPbYzLDo5d7Kz/vTszOzPdEu+1t6d6Z+dHM9PdUnerq6a6R62Wnt73SXp6UqspieExv/LXHHn84l3CaJ5TnieU5okg+UZRhCg0rnW/ELREGFnfKiaEUVHaDCsRIUqC0pLFIZyLVcHEKrGsEt0xXlyY/r4Xb2sSkv+oZDzl0V6C/vwYz9CjoIQ55QLpIgBld5AsjNMlQfjS4qH3F3sRLRYEmLvxyRzUgA+gJsSnZveCQpBxBVlFIlCHX1qa+2GxW9LaE+DI9U9PUyqOdyuIub9dA0Lwq92IoDUBZm9+cgb69mPbi2ZCpDUALQIj/OLC4ZOft3pGWwIY8FvB1X8YE/x8KxKw/pMM78n5G38+ZWp+sPrl1Dozu/inbTaUdgSYX/70GCf0VLDFN6kRInLEynzkjqZ86tCKAPO3/5LnFjnpk89cBqkBSvLO07UtBrVWBOC2DU2/GeoFiXlzWpTwU/6uQBsCYO03/X4zXOH8FxZrdLHaEMCt/eGU16TapAFK2fc8W0AbAhBCZ5vkNH9D1IBnC2hBAHT1mr4/RLRbJE0Fdx1sWhCAEmZqfwuQQg2CEQEag1oQAKZ0Z0ItrEm8pQYYG5rVggBEwHy+OSLXgJMhe/UgABF7Iy+9yZBYhOSVE2D+iz/mDBZqNMAdMaOcAGLM2jZBoUYdKcyV0pxyAhBnyLQAyrgnNCCAssKbjFEDylsAys0IQCUVlRNAZeFTnzcsF8ukXgkSChC1oUzt3huv1lZ27eKl8THuMFdvzOI2Hd2oZcbLpUzh4bPhN1aeSiSnTxTLKhoCdIADgd+4/Vah9tWegge6P7obVspmnFI2Wy1O7a78+53q8GvFR2P7762QoZrjj6vjNSwfv2sI0AYZ++HURGnhwAyvDo+0ibItGONufPm1PbX/FaZG3/nvg5G37z/aFkmjAMbFNUOAJkCw1ldu7nu9en96uumW9F8kQvn6/hnn+UQ2+40b96QfjDIi9P+Lh99fNATwKV2s50ZeXPvmwV5qve/xbZfVB9PTzlo2N3F08ZZuXQKz6CUU2IwCNmHDJv/F3799JCjwPTbYL3ZMrF2b+7r3X4sz1H5eqy+hLIYAoITq7b2FtX/MHWpl6AUBGJKg/MWhN4NIK4g0GCOXvfcGU0+AyvV9e8q33n4rCMV2SgO7g9r913Z2ihPJPaj9Cwffv+zllWoClP85txetdk8ZYZ/Ly/tnSH0YZmHVHZSSC/7cU0kAtPQRfBy7+5UR9rVwLKvynzf7Hl0MKp9g9HLz/gGpIwCCv/bZtw5GDb4HXvWr19UQAJp+a3KHa/l7suA5VQTwwEfPnV8JUV5jK2AXd09Emaebl2Ofa7WdTGoI4I7x//bdIyrB90CvrUxFagwySi56Vr8ng3dOBQGCdvB4yuv3XH+0KzICYL/vt/qbZU48AXQDHwFwnU1RjAZgA6nlA+9dbAbd/z/RBNARfE/59pPJcO0QMPpIvfZrL79258QSQGfwEYz681x4ayFx70Ew+tr1+34yJHIySHfwEQBRGRv2AxHkNRtyLiwc7r5FHOaZuBYgDuCj4rlthVL50OJf2N96RzDMt/kIRYjmTKL6HxfwUR9ifXwsaL0Iwi4tHDzR8PPLpJ8YAsQJfAQm6BYAh3vLB05s8/R1I0EiuoC4gY+giAC7ACbItW7DvXZEiH0LEEfwXQKAS7gdKD2F42bROyd+39MzvsixbgHiCr6nfweWoHnXfZ1hrM9emWjp45dNL7YEiDv4sgC1jYeOnjYTPG2faXEjlgQw4L8EX8bR0wLzLUGxI0CSwBeVbO/OoM2aHwT4yIRYESBJ4G+phrJ/wMVL7fr5oMCPFQFSDz6gRe3aucX5H92R5YtMvFi0AEkFX1Qz0sNwxuiFoMGPRQuQVPBR+eANlPIFIPgLB967IlOje40jzcBeEw4ifpLBl9WP698/cCIU8FEGbbsAAz64i2FyZ/lQ7/59WXJpSwADfjTga0kAA3504CMBtLIBDPgAfp/TughmP4c2BDDgA3yUXYE5/Y6rePsBudMzWhiBBnywxpm1uHTwxJYXNzsBF9Q95S3AxoP8SOXWvsB25QhKMZGmg3P6k+PnI81zMzOlBCj8TOTXPiv/hI2XB5sXV6G5oPIE8Aed0x9EFGVdAICfg28E/kqQ9O4UKupD7ssbrV7aHATUXp5V0gJsgv8RCDrTi7CJistZdf1fh/9w+/h3un7iPcxyKyEA1vy0g28/m7xJhFUNE1yZtCPvAnZ/KM6AYHMywiUyDtR8BB8mgpSDj/qNlABTPxenIc9jiQRWplCagY8iR0YAAP8UZWTLh4tldJaYOBqCHxkBNsFvfK82MaDKFkRT8CMhgAFfrz6/mbOhdgEGfL3BRzKENgx89aw4BpsSmmZfE2u/ueZ7/0NpARB8eE8dh3tdD/hmkPYfVuhaiOYIGvf5zaIGToDCL+BjhJLgozCCWHazULH+HyPwUc+BEgDB54KgizedR8zAR5ACIwDO7HFCfglphrf5kc60iiH4gRHABT8DNV+Qnj8Dy21W0xlXKdliCn4gBBgEfCnl6h4pxuAPTAB3WrfPmq87rlLyxRz8gQjggm/11+z7lQt75WgxK+aXSeo6AeAPRADOyE8hgRkpZXWLJFi8hoIJAb9vAoCL9zSh5Gg3XKXvCxIfZ1CCwO+LAJv+/UCndWlcWoCEgd8zAabOiuMwpx+4f99xrIp0a6EqYgLB74kAhbPiXZjcwRU9gR9UUL1tgISCj0BKeQLdsX4P/v1eGcIdjUcCCQZfigANR0+YLt5aptwraSKJn3DwpQjgLuHuw8XbC0DC1pAAKQC/KwHc4V5QY/0OjOC4JgAU3iFKtLdSAn5HAmxa/IEO9zqhKOrDTzvdj+xeisBvSwDs98Oy+NsBySsjyglAHatcfzy5rMtLG+10FWT4tlGA6+PHCZ6ID6c2tAbbYygbDiL4tSc7bgqRsBVKXXDcRgAHF3KGbPS1k4lvjCh5UZJXRx+mEXzEYQsBCh+KOZVv7/BSdiXqVgDBt5+P301bzfcq4RYCcEo+8G6oOONogK9l70aVNy+PPUDwo8pPx3waBECrX1XT71eMvTH6VFRGV/xhYVw769l79nruQRhpxylNlwCu1c/ID3QRvL42fo/UM2vhyMNs59nkDacM3Y05Nm0ABu/rKzL82mFgP5+8FTgJcIz/ZHLZHXG0yzhl4W4LAKt7TupWbrQHak9fuRFUd4DppG2ML4NpBi1/eJmj5+XcMokHEQe7AwvG6Fa2socw3vtuYlDrnRcTd0ytb41Gxl3aJVrf1CXUKY89EmAcsmx5mo1Wp+SIwGxeHik6pdFiWod4MvhloPbvlYmoOo47RESrHX6Z0Y2dZKS+08rYWWEJ+PAS33zLGTyJdVZx6iNPeGn4sQG+O2rYAuTBAIzVgUNFAj9lfuNYaauzsEw367+zuOZu0BpoOIKCTtikJ6EBBz4AqfgwBFAMgOrskQAl1UKkNv8hsq667AyMQOVCqFaCsvw3NOgCoAn4UpkCUp5x8XdUeeuLXYCSRRgpxx6LH+gnYPvVJyOcpHo+vF/FDfoc1DzlIwAsAxJgcdDCmOf70ADVo+Ix6IdWwRA03UAfGA70iCBLAz0f0MNoA+CigKsBpWeSkdPAavFjqkXL6xKA2OSynNwmVhAaEJrUfiyLSwAcjsBFaF+oDkJpSUqDZcglXcrzsgVAaRx9hNJFOWHIAbX/6up5qo3N1SAAGoOwx682zAxD+RqkuapT7Ud9NAjgKgdtATMiCI0nTJBLOtX+bQRwbQGbnIMbyl2UoaGgKGFsXYu/pdrZWVtbAFCO2xUIEvlHjBXhEkm2oOQrxd9QLbtX2k4DuCkULBf/sVkx1E5DcuEu+B9TbStUWwJg8fCNIWKRU7ANfHq/9SeHc8tY0Oxfhpp/seVNTQI7EsCTsUEESmZNi+BppeN5FWr+BV28fZ0klSKAPwF8kQRGCrPwJvEsWLU5WFY+47+f5mvG3Im1a6QOfb4Gc/0yWPRMgOZEcUcR+PZYAVqGHPzyMLDMQxwkRg6u8esh7hdEkCzetZcGxBlvDvPu6XiGJr3hwIEKsAozqeg7cc9w/XlcQPfr9v/CziSZeYZAUAAAAABJRU5ErkJggg==';

const CommentsModal = ({isModalVisible, toggleModal, reviews}) => {
  const comments = reviews;

  const renderItem = ({item}) => {
    return (
      <View style={styles.commentItem}>
        <Avatar source={{uri: item.user.avatar}} />
        <View style={styles.commentView}>
          <Text style={styles.commentUser}>{item.user.username}</Text>
          <Text style={styles.commentText}>{item.comment}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.flexView}>
      <Modal
        onBackdropPress={() => toggleModal(false)}
        onBackButtonPress={() => toggleModal(false)}
        isVisible={isModalVisible}
        onSwipeComplete={toggleModal}
        animationIn="bounceInUp"
        animationOut="bounceOutDown"
        animationInTiming={900}
        animationOutTiming={500}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={500}
        style={styles.modal}>
        <View style={styles.modalContent}>
          <View style={styles.barIcon} />
          <View style={styles.center}>
            <View style={styles.contentContainer}>
              <View style={styles.commentListContainer}>
                <Text style={styles.sectionTitle}>Comments</Text>
                {comments.length === 0 ? (
                  <View style={styles.noDataContainer}>
                    <NoData message="This movies has no comments yet" />
                  </View>
                ) : (
                  <FlatList
                    data={comments}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                    ItemSeparatorComponent={() => (
                      <Divider style={styles.commentSeparator} />
                    )}
                    contentContainerStyle={styles.commentListContent}
                  />
                )}
              </View>

              <View style={styles.divider} />

              <View style={styles.commentForm}>
                <Text style={styles.sectionTitle}>Add your comment</Text>
                <View style={styles.ratingContainer}>
                  <RatingComponent />
                </View>
                <TextInput
                  style={styles.commentInput}
                  placeholder="Write your comment here"
                />
              </View>

              <Button
                style={styles.addButton}
                onPress={() => toggleModal(false)}>
                Add Comment
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CommentsModal;

const styles = StyleSheet.create({
  flexView: {
    backgroundColor: 'white',
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: '#ffffff',
    paddingTop: 12,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    minHeight: '70%',
  },
  center: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    flex: 1,
  },
  barIcon: {
    alignSelf: 'center',
    width: 60,
    height: 5,
    backgroundColor: '#bbb',
    borderRadius: 3,
  },
  text: {
    color: '#bbb',
    fontSize: 24,
    marginTop: 100,
  },
  contentContainer: {
    marginTop: 10,
    width: '100%',
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  commentListContainer: {
    flex: 1,
  },
  commentListContent: {
    flexGrow: 1,
  },
  commentItem: {
    flexDirection: 'row',
    paddingVertical: 8,
  },
  commentText: {
    fontSize: 16,
  },
  commentUser: {
    fontSize: 14,
  },
  commentText: {
    fontSize: 16,
  },
  commentView: {
    alignSelf: 'center',
    flexDirection: 'column',
    marginLeft: 15,
    width: '85%',
  },
  commentSeparator: {
    marginVertical: 4,
  },
  divider: {
    height: 1,
    backgroundColor: '#CCC',
    marginVertical: 16,
  },
  commentForm: {
    marginBottom: 16,
  },
  ratingContainer: {
    // Add styles for the star rating component
  },
  commentInput: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    padding: 8,
    marginBottom: 8,
  },
  addButton: {
    alignSelf: 'center',
    width: '60%',
    borderRadius: 500,
  },
  noDataContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 90,
    flex: 3,
  },
});
