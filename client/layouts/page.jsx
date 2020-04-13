import Head from 'next/head';
import {withRouter} from 'next/router';
import React from 'react';

import {dateTime} from '../utils/date-format';
import titleStyle from '../utils/title-style';


const Page = ({children, date, description, image, title = 'Insumos cumbre', keywords, router}) => {
    const domain = 'https://www.insumoscumbre.net/';
    const formattedTitle = titleStyle(title);

    return (
        <>
            <Head>
                <title>{formattedTitle}</title>
                <meta charSet="utf-8" />
                <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
                <meta content="width=device-width, initial-scale=1" name="viewport" />
                {description && <meta content={description} name="description" />}
                {keywords && <meta content={keywords} name="keywords" />}
                <meta content="follow, index" name="robots" />
                <meta content="#ffffff" name="theme-color" />
                <meta content="#ffffff" name="msapplication-TileColor" />
                <meta content="/favicons/browserconfig.xml" name="msapplication-config" />
                <link href="/favicons/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
                <link href="/favicons/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
                <link href="/favicons/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
                <link href="/favicons/site.webmanifest" rel="manifest" />
                <link color="#5bbad5" href="/favicons/safari-pinned-tab.svg" rel="mask-icon" />
                <link href="/favicons/favicon.ico" rel="shortcut icon" />

                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-xVVam1KS4+Qt2OrFa+VdRUoXygyKIuNWUUUBZYv+n27STsJ7oDOHJgfF0bNKLMJF" crossOrigin="anonymous"/>

                <meta content="es_PE" property="og:locale" />
                <meta content={formattedTitle} property="og:title" />
                <meta content={description} property="og:description" />

                {date && (
                    <>
                        <meta content="article" property="og:type" />
                        <meta content={dateTime(date)} property="article:published_time" />
                    </>
                )}

            </Head>

            {children}
            
        </>
    );
};

export default withRouter(Page);
